import React from 'react';
import './conversation.scss';

export interface ConversationMessage {
  id: string | number;
  content: React.ReactNode;
  mine?: boolean;
  author?: string;
  timestamp?: string;
}

export interface ConversationProps extends React.HTMLAttributes<HTMLDivElement> {
  messages: ConversationMessage[];
}

export const Conversation: React.FC<ConversationProps> = ({ messages, className, style, ...rest }) => {
  return (
    <div className={["rhp-conversation", className].filter(Boolean).join(" ")} style={style as React.CSSProperties} {...rest}>
      {messages.map(m => (
        <div key={m.id} className={["rhp-conversation__message", m.mine && "rhp-conversation__message--mine"].filter(Boolean).join(" ")}>
          <div className="rhp-conversation__bubble">
            <div className="rhp-conversation__content">{m.content}</div>
            {(m.author || m.timestamp) && (
              <div className="rhp-conversation__meta">
                <span>{m.author}</span>
                <span>{m.timestamp}</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Conversation;

