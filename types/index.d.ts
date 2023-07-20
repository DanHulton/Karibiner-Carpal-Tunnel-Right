// Karibiner Config types
// This doesn't describe the entire possible type space, just the space
// necessary to generate this specific config file.

interface KaribinerConfig {
  title: string;
  description: string;
  rules: KaribinerRule[];
}

interface KaribinerRule {
  description: string;
  manipulators: KaribinerManipulator[];
}

interface KaribinerManipulator {
  type: string;
  from: KaribinerFromKey;
  to: KaribinerToKey[];
  to_after_key_up?: KaribinerToAfterKeyUp[];
  to_if_alone?: KaribinerToIfAlone[];
  conditions?: KaribinerCondition[];
}

interface KaribinerFromKey {
  key_code: string;
  modifiers?: KaribinerFromModifiers;
}

interface KaribinerFromModifiers {
  mandatory?: string[]
  optional?: string[];
}

interface KaribinerToKey {
  key_code?: string;
  set_variable?: KaribinerSetVariable;
  modifiers?: string[];
}

interface KaribinerSetVariable {
  name: string;
  value: any;
}

interface KaribinerToAfterKeyUp {
  set_variable: KaribinerSetVariable;
}

interface KaribinerToIfAlone {
  key_code: string;
}

interface KaribinerCondition {
  type: string;
  name: string;
  value: any;
}

// Mapping Types

interface Mapping {
  space_modifier: Record<string, string>;
  caps_lock_modifier: Record<string, string>;
  touchpad_modifier: Record<string, string>;
}
