local log = hs.logger.new('init','debug')

-- Button callback from hs.streamdeck
local function streamdeck_button(deck, buttonID, pressed)
  local modifier

  -- Primary (middle, F15, 0x71, 113)
  if buttonID == 2 then modifier = "primary"
  -- Secondary (right, F16, 0x6a, 106)
  elseif buttonID == 3 then modifier = "secondary"
  -- Tertiary (left, F17, 0x40, 64)
  elseif buttonID == 1 then modifier = "tertiary"
  end

  local modifier_value = pressed and 1 or 0

  log.i(modifier .. "_modifier - " .. modifier_value)

  hs.execute('"/Library/Application Support/org.pqrs/Karabiner-Elements/bin/karabiner_cli" --set-variables \'{"' .. modifier .. '_modifier": ' .. modifier_value .. '}\'')
end

-- Discovery callback from hs.streamdeck
local function streamdeck_discovery(connected, deck)
  if connected then
    log.i('connected')
    deck:buttonCallback(streamdeck_button)
  end
end

hs.streamdeck.init(streamdeck_discovery)

log.i('started')
