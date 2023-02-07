import React from "react";
import { UNSAFE_NavigationContext as NavigationContext } from "react-router-dom";

export function useUnlocker(blocker: any, when = true) {
  const { navigator } = React.useContext(NavigationContext) as any;

  React.useEffect(() => {
    if (!when) return;

    const unlock = navigator.block((tx: any) => {
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

export function useUnlockPrompt(message: string, when = true) {
  const blocker = React.useCallback(
    (tx: any) => {
      if (window.confirm(message)) tx.retry();
    },
    [message]
  );

  useUnlocker(blocker, when);
}

export function useUnlockNoPrompt(when = true) {
  const blocker = React.useCallback<Function>((tx: any) => {
    tx.retry();
  }, []);

  useUnlocker(blocker, when);
}

export function useBlocker(blocker: any, when = true) {
  const { navigator } = React.useContext(NavigationContext) as any;

  React.useEffect(() => {
    if (!when) return;

    const lock = navigator.block((tx: any) => {
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

export function useLockPrompt(message: string, when = true) {
  const blocker = React.useCallback(() => {
    if (window.confirm(message)) {
    }
  }, [message]);

  useBlocker(blocker, when);
}

export function useLockNoPrompt(when = true) {
  const blocker = React.useCallback(() => {}, []);
  useBlocker(blocker, when);
}
