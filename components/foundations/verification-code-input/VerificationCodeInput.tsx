"use client";

import {
  type ClipboardEvent,
  type KeyboardEvent,
  useRef,
} from "react";

import styles from "./VerificationCodeInput.module.css";

export type VerificationCodeInputProps = {
  disabled?: boolean;
  invalid?: boolean;
  onChange: (value: string) => void;
  value: string;
};

const CODE_LENGTH = 6;

export function VerificationCodeInput({
  disabled = false,
  invalid = false,
  onChange,
  value,
}: VerificationCodeInputProps) {
  const inputs = useRef<Array<HTMLInputElement | null>>([]);
  const digits = Array.from(
    { length: CODE_LENGTH },
    (_, index) => value[index] ?? "",
  );

  function update(index: number, rawValue: string) {
    const digit = rawValue.replace(/\D/g, "").slice(-1);
    const next = [...digits];
    next[index] = digit;
    onChange(next.join(""));
    if (digit && index < CODE_LENGTH - 1) inputs.current[index + 1]?.focus();
  }

  function handleKeyDown(
    index: number,
    event: KeyboardEvent<HTMLInputElement>,
  ) {
    if (event.key === "Backspace" && !digits[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
    if (event.key === "ArrowLeft" && index > 0) {
      event.preventDefault();
      inputs.current[index - 1]?.focus();
    }
    if (event.key === "ArrowRight" && index < CODE_LENGTH - 1) {
      event.preventDefault();
      inputs.current[index + 1]?.focus();
    }
  }

  function handlePaste(event: ClipboardEvent<HTMLInputElement>) {
    const pasted = event.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, CODE_LENGTH);
    if (!pasted) return;
    event.preventDefault();
    onChange(pasted);
    inputs.current[Math.min(pasted.length, CODE_LENGTH) - 1]?.focus();
  }

  return (
    <div
      aria-label="Six-digit verification code"
      className={styles.group}
      data-invalid={invalid || undefined}
      role="group"
    >
      {digits.map((digit, index) => (
        <input
          aria-label={`Digit ${index + 1}`}
          autoComplete={index === 0 ? "one-time-code" : "off"}
          className={styles.input}
          disabled={disabled}
          inputMode="numeric"
          key={index}
          maxLength={1}
          onChange={(event) => update(index, event.currentTarget.value)}
          onFocus={(event) => event.currentTarget.select()}
          onKeyDown={(event) => handleKeyDown(index, event)}
          onPaste={handlePaste}
          pattern="[0-9]*"
          ref={(node) => {
            inputs.current[index] = node;
          }}
          required
          value={digit}
        />
      ))}
    </div>
  );
}
