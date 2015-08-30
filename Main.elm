import StartApp
import Html exposing (..)
import Bingo exposing (initialModel, view, update)

main : Signal Html
main =
  StartApp.start
    { model = initialModel,
      view = view,
      update = update
    }
