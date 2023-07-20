const base:KaribinerConfig = {
  "title": "Carpal Tunnel Right",
  "description": "Mirrors the right side of the keyboard to the left, so if you have carpal tunnel in your right hand, you don't need to use it.",
  "rules": [
    {
      "description": "Carpal Tunnel Right",
      "manipulators": [
        {
          "type": "basic",
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
        },
        {
          "type": "basic",
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
              "key_code": "caps_lock"
            }
          ],
        },
      ],
    },
  ],
};

export default base;
