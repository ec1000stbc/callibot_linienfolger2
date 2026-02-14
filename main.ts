let speed = 30
let right = speed
right = speed - 2
let on = 0
let corr = 10
basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    if (input.buttonIsPressed(Button.A)) {
        on = 1
    }
    while (on) {
        if (input.buttonIsPressed(Button.B)) {
            on = 0
        }
        while (maqueen.readPatrol(maqueen.Patrol.PatrolLeft, maqueen.Brightness.Bright) && maqueen.readPatrol(maqueen.Patrol.PatrolLeft, maqueen.Brightness.Dark)) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed - 2)
        }
        while (maqueen.readPatrol(maqueen.Patrol.PatrolLeft, maqueen.Brightness.Dark) && maqueen.readPatrol(maqueen.Patrol.PatrolRight, maqueen.Brightness.Bright)) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed - corr)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed + corr)
            basic.pause(100)
        }
        while (maqueen.readPatrol(maqueen.Patrol.PatrolRight, maqueen.Brightness.Dark) && maqueen.readPatrol(maqueen.Patrol.PatrolLeft, maqueen.Brightness.Bright)) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed - corr)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed + corr)
            basic.pause(100)
        }
    }
})
