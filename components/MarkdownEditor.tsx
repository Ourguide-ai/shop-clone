"use client";

import { useRef, useCallback } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ToolbarAction {
  label: string;
  icon: React.ReactNode;
  prefix: string;
  suffix: string;
  block?: boolean;
}

const TOOLBAR_ACTIONS: ToolbarAction[] = [
  {
    label: "Bold",
    icon: <strong>B</strong>,
    prefix: "**",
    suffix: "**",
  },
  {
    label: "Italic",
    icon: <em>I</em>,
    prefix: "_",
    suffix: "_",
  },
  {
    label: "Strikethrough",
    icon: <s>S</s>,
    prefix: "~~",
    suffix: "~~",
  },
  {
    label: "Heading 2",
    icon: (
      <span>
        H<sub>2</sub>
      </span>
    ),
    prefix: "## ",
    suffix: "",
    block: true,
  },
  {
    label: "Heading 3",
    icon: (
      <span>
        H<sub>3</sub>
      </span>
    ),
    prefix: "### ",
    suffix: "",
    block: true,
  },
  {
    label: "Bullet List",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
        <path fillRule="evenodd" d="M6 4.75A.75.75 0 016.75 4h10.5a.75.75 0 010 1.5H6.75A.75.75 0 016 4.75zM6 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75A.75.75 0 016 10zm0 5.25a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75a.75.75 0 01-.75-.75zM1.99 4.75a1 1 0 011-1h.01a1 1 0 110 2h-.01a1 1 0 01-1-1zm0 5.25a1 1 0 011-1h.01a1 1 0 110 2h-.01a1 1 0 01-1-1zm1 4.25a1 1 0 100 2h.01a1 1 0 100-2h-.01z" clipRule="evenodd" />
      </svg>
    ),
    prefix: "- ",
    suffix: "",
    block: true,
  },
  {
    label: "Numbered List",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
        <path fillRule="evenodd" d="M6 4.75A.75.75 0 016.75 4h10.5a.75.75 0 010 1.5H6.75A.75.75 0 016 4.75zM6 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75A.75.75 0 016 10zm0 5.25a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
      </svg>
    ),
    prefix: "1. ",
    suffix: "",
    block: true,
  },
  {
    label: "Blockquote",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
        <path fillRule="evenodd" d="M4.5 2A2.5 2.5 0 002 4.5v3.879a2.5 2.5 0 00.732 1.767l7.5 7.5a2.5 2.5 0 003.536 0l3.878-3.878a2.5 2.5 0 000-3.536l-7.5-7.5A2.5 2.5 0 008.38 2H4.5zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
      </svg>
    ),
    prefix: "> ",
    suffix: "",
    block: true,
  },
  {
    label: "Code",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
        <path fillRule="evenodd" d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06z" clipRule="evenodd" />
      </svg>
    ),
    prefix: "`",
    suffix: "`",
  },
  {
    label: "Code Block",
    icon: <span>{"{}"}</span>,
    prefix: "```\n",
    suffix: "\n```",
    block: true,
  },
  {
    label: "Link",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
        <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
        <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
      </svg>
    ),
    prefix: "[",
    suffix: "](url)",
  },
  {
    label: "Image",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
        <path fillRule="evenodd" d="M1 5.25A2.25 2.25 0 013.25 3h13.5A2.25 2.25 0 0119 5.25v9.5A2.25 2.25 0 0116.75 17H3.25A2.25 2.25 0 011 14.75v-9.5zm1.5 5.81v3.69c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-2.69l-2.22-2.219a.75.75 0 00-1.06 0l-1.91 1.909-4.22-4.22a.75.75 0 00-1.06 0L2.5 11.06zm10-1.31a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clipRule="evenodd" />
      </svg>
    ),
    prefix: "![alt](",
    suffix: ")",
  },
  {
    label: "Horizontal Rule",
    icon: <span>---</span>,
    prefix: "\n---\n",
    suffix: "",
    block: true,
  },
];

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  minRows?: number;
}

export default function MarkdownEditor({ value, onChange, placeholder, minRows = 16 }: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const applyAction = useCallback(
    (action: ToolbarAction) => {
      const ta = textareaRef.current;
      if (!ta) return;

      const start = ta.selectionStart;
      const end = ta.selectionEnd;
      const selected = value.slice(start, end);
      const before = value.slice(0, start);
      const after = value.slice(end);

      let newText: string;
      let cursorPos: number;

      if (action.block && !selected) {
        const needsNewline = before.length > 0 && !before.endsWith("\n");
        const prefix = (needsNewline ? "\n" : "") + action.prefix;
        newText = before + prefix + "text" + action.suffix + after;
        cursorPos = before.length + prefix.length;
      } else {
        newText = before + action.prefix + (selected || "text") + action.suffix + after;
        cursorPos = start + action.prefix.length;
      }

      onChange(newText);

      requestAnimationFrame(() => {
        ta.focus();
        const selectEnd = cursorPos + (selected ? selected.length : 4);
        ta.setSelectionRange(cursorPos, selectEnd);
      });
    },
    [value, onChange]
  );

  return (
    <div className="md-editor">
      <div className="md-editor__toolbar">
        {TOOLBAR_ACTIONS.map((action, i) => (
          <button
            key={action.label}
            type="button"
            title={action.label}
            onClick={() => applyAction(action)}
            className={`md-editor__toolbar-btn ${i === 3 || i === 5 || i === 7 || i === 9 ? "md-editor__toolbar-btn--sep" : ""}`}
          >
            {action.icon}
          </button>
        ))}
      </div>

      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || "Write your content in Markdown..."}
        rows={minRows}
        className="md-editor__textarea"
      />
    </div>
  );
}

export function MarkdownPreview({ content }: { content: string }) {
  if (!content.trim()) {
    return (
      <div className="md-preview md-preview--empty">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="md-preview__empty-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
        <p>Nothing to preview yet. Start writing to see your content here.</p>
      </div>
    );
  }

  return (
    <div className="md-preview blog-content">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
