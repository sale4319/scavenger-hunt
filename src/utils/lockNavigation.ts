import { History, Transition } from "history";
import { useCallback, useContext, useEffect } from "react";
import { Navigator } from "react-router";
import { UNSAFE_NavigationContext as NavigationContext } from "react-router-dom";

type ExtendNavigator = Navigator & Pick<History, "block">;

function useUnlocker(blocker: (tx: Transition) => void, when = true) {
  const { navigator } = useContext(NavigationContext);

  useEffect(() => {
    if (!when) return;

    const unlock = (navigator as ExtendNavigator).block((tx: Transition) => {
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
  const blocker = useCallback(
    (tx: Transition) => {
      if (window.confirm(message)) tx.retry();
    },
    [message]
  );

  useUnlocker(blocker, when);
}

export function useUnlockNoPrompt(when = true) {
  const blocker = useCallback((tx: Transition) => {
    tx.retry();
  }, []);

  useUnlocker(blocker, when);
}

function useBlocker(blocker: (tx: Transition) => void, when = true) {
  const { navigator } = useContext(NavigationContext);

  useEffect(() => {
    if (!when) return;

    const lock = (navigator as ExtendNavigator).block((tx: Transition) => {
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
  const blocker = useCallback(() => {
    if (window.confirm(message)) {
    }
  }, [message]);

  useBlocker(blocker, when);
}

export function useLockNoPrompt(when = true) {
  const blocker = useCallback(() => {}, []);
  useBlocker(blocker, when);
}
