import React from "react";
import { UNSAFE_NavigationContext as NavigationContext } from "react-router-dom";

export function useUnlocker(blocker, when = true) {
  const { navigator } = React.useContext(NavigationContext);

  React.useEffect(() => {
    if (!when) return;

    const unlock = navigator.block((tx) => {
      const autoUnlockingTx = {
        ...tx,
        retry() {
          unlock();
          tx.retry();
        },
      };

      blocker(autoUnlockingTx);
    });

    return unlock;
  }, [navigator, blocker, when]);
}

export function useUnlockPrompt(message, when = true) {
  const blocker = React.useCallback(
    (tx) => {
      if (window.confirm(message)) tx.retry();
    },
    [message]
  );

  useUnlocker(blocker, when);
}

export function useBlocker(blocker, when = true) {
  const { navigator } = React.useContext(NavigationContext);

  React.useEffect(() => {
    if (!when) return;

    const lock = navigator.block((tx) => {
      const autoLockingTx = {
        ...tx,
        retry() {
          tx.retry();
        },
      };

      blocker(autoLockingTx);
    });

    return lock;
  }, [navigator, blocker, when]);
}

export function useLockPrompt(message, when = true) {
  const blocker = React.useCallback(
    (tx) => {
      if (window.confirm(message)) tx.retry();
    },
    [message]
  );

  useUnlocker(blocker, when);
}

export function useLockNoPrompt(when = true) {
  const blocker = React.useCallback(() => {}, []);
  useBlocker(blocker, when);
}
