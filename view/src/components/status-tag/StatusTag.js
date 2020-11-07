import React from "react";
import "./StatusTag.css";

export function ApprovedTag() {
  return (
    <div className="approved-tag">
      <b>Approved</b>
    </div>
  );
}

export function RejectedTag() {
  return (
    <div className="rejected-tag">
      <b>Rejected</b>
    </div>
  );
}
export function PendingTag() {
  return (
    <div className="pending-tag">
      <b>Pending</b>
    </div>
  );
}

export function MailedTag() {
  return (
    <div className="mailed-send">
      <b>Mailed</b>
    </div>
  );
}