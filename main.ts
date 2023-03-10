function Update_Scoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("Player A:" + PA)
    OLED.newLine()
    OLED.writeStringNewLine("Player B:" + PB)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds:" + Rounds)
    OLED.newLine()
    OLED.writeStringNewLine("Ties:" + Ties)
}
input.onButtonPressed(Button.A, function () {
    PA += 1
    basic.showString("A")
    Update_Scoreboard()
    rounds()
})
function rounds () {
    Rounds += 1
}
input.onButtonPressed(Button.AB, function () {
    Ties += 1
    basic.showString("T")
    Update_Scoreboard()
    rounds()
})
input.onButtonPressed(Button.B, function () {
    PB += 1
    basic.showString("B")
    Update_Scoreboard()
    rounds()
})
input.onGesture(Gesture.Shake, function () {
    Reset()
})
function Reset () {
    OLED.init(128, 64)
    OLED.writeStringNewLine("Want to play?")
    PA = 0
    PB = 0
    Rounds = 0
    Ties = 0
    basic.pause(2000)
    Update_Scoreboard()
}
let Ties = 0
let Rounds = 0
let PB = 0
let PA = 0
Reset()
