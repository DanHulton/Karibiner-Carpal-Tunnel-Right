const base:KaribinerConfig = {
  "title": "Carpal Tunnel Right",
  "description": "Mirrors the right side of the keyboard to the left, so if you have carpal tunnel in your right hand, you don't need to use it.",
  "rules": [
    {
      "description": "Carpal Tunnel Right",
      "manipulators": [
        {
          "type": "basic",
          "description": "Spacebar is a modifier, unless caps_lock is being held",
          "from": {
            "key_code": "spacebar",
            "modifiers": {
              "optional": ["any"]
            }
          },
          "to": [
            {
              "set_variable": {
                "name": "space_modifier",
                "value": 1
              }
            }
          ],
          "to_after_key_up": [
            {
              "set_variable": {
                "name": "space_modifier",
                "value": 0
              }
            }
          ],
          "to_if_alone": [
            {
              "key_code": "spacebar"
            }
          ],
          "conditions": [{
            "type": "variable_unless",
            "name": "caps_lock_modifier",
            "value": 1,
          }],
        },
        {
          "type": "basic",
          "description": "Spacebar is caps lock if caps lock is held.",
          "from": {
            "key_code": "spacebar",
            "modifiers": {
              "optional": ["any"]
            }
          },
          "to": [
            {
              "key_code": "caps_lock"
            }
          ],
          "conditions": [{
            "type": "variable_if",
            "name": "caps_lock_modifier",
            "value": 1,
          }],
        },
        {
          "type": "basic",
          "description": "Caps lock is a modifier when held.",
          "from": {
            "key_code": "caps_lock",
            "modifiers": {
              "optional": ["any"]
            }
          },
          "to": [
            {
              "set_variable": {
                "name": "caps_lock_modifier",
                "value": 1
              }
            }
          ],
          "to_after_key_up": [
            {
              "set_variable": {
                "name": "caps_lock_modifier",
                "value": 0
              }
            }
          ],
          "to_if_alone": [
            {
              "key_code": "return_or_enter"
            }
          ],
        },
      ],
    },
  ],
};

export default base;
