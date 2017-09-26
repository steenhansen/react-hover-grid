"use strict"

module.exports = function (post_fix) {

  let SERVER_WIDTH_ID, SERVER_KEY_ID, TILE_HOVER_TEXT_PF, TEXT_UP, TILE_IMAGE_PF, TILE_CONTAINER_PF
    , TILE_NORMAL_TEXT_PF, HOVER_TEXT_POSTFIX, NORMAL_TEXT_POSTFIX, IMAGE_POSTFIX, IMAGE_ID

  if (process.env.NODE_ENV === 'development') {
    SERVER_WIDTH_ID = "server_width_"
    SERVER_KEY_ID = "server_key_"
    TILE_HOVER_TEXT_PF = "tile-hover-text--"
    TILE_IMAGE_PF = 'tile-image--'
    TILE_CONTAINER_PF = 'tile-container--'
    TILE_NORMAL_TEXT_PF = "tile-normal-text--"
    HOVER_TEXT_POSTFIX = '--hover-text'
    IMAGE_POSTFIX = '--image'
    IMAGE_ID = 'image-id'
    NORMAL_TEXT_POSTFIX = '--normal-text'
  } else {
    SERVER_WIDTH_ID = "a"
    SERVER_KEY_ID = "b"
    TILE_HOVER_TEXT_PF = "c"
    TILE_IMAGE_PF = "d"
    TILE_CONTAINER_PF = "e"
    TILE_NORMAL_TEXT_PF = "f"
    HOVER_TEXT_POSTFIX = 'g'
    IMAGE_POSTFIX = 'h'
    IMAGE_ID = 'i'
    NORMAL_TEXT_POSTFIX = 'j'
  }

  TILE_HOVER_TEXT_PF = TILE_HOVER_TEXT_PF + post_fix
  TILE_IMAGE_PF = TILE_IMAGE_PF + post_fix
  TILE_CONTAINER_PF = TILE_CONTAINER_PF + post_fix
  TILE_NORMAL_TEXT_PF = TILE_NORMAL_TEXT_PF + post_fix

  function serverWidthId (browser_width, id_postfix) {
    const server_width_name = SERVER_WIDTH_ID + browser_width + id_postfix
    return server_width_name
  }

  return {
    SERVER_WIDTH_ID, SERVER_KEY_ID, TILE_HOVER_TEXT_PF, TEXT_UP, TILE_IMAGE_PF, TILE_CONTAINER_PF
    , TILE_NORMAL_TEXT_PF, HOVER_TEXT_POSTFIX, NORMAL_TEXT_POSTFIX, IMAGE_POSTFIX, IMAGE_ID
    , serverWidthId
  }
}

