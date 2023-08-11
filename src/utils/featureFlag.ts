const FEATURE_VALUE_ENABLED = "true";
const FEATURE_VALUE_DISABLED = "false";

const getVariable = (key: string) =>
  typeof window !== "undefined" &&
  window.__ENV__ !== undefined &&
  window.__ENV__[key]
    ? window.__ENV__[key]
    : process.env[key];

export const isFeatureFlagEnabled = (featureFlagName: string): boolean => {
  const reactAppPrefix = "REACT_APP";
  const featureFlagFullName = `${reactAppPrefix}_${featureFlagName}`;
  const environmentVariables = window?.__ENV__ || {};

  if (window.location.href.includes(`${featureFlagName}=1`)) {
    environmentVariables[featureFlagFullName] = FEATURE_VALUE_ENABLED;
  } else if (window.location.href.includes(`${featureFlagName}=0`)) {
    environmentVariables[featureFlagFullName] = FEATURE_VALUE_DISABLED;
  }

  return getVariable(featureFlagFullName) === FEATURE_VALUE_ENABLED;
};
