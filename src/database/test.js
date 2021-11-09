import Database from './db.js'
import createProffy from './createProffy.js'

Database.then( async (db)=> {
    let proffyValue = {
        name: 'Mayk Brito',
        avatar: 'https://avatars.githubusercontent.com/u/60361954?v=4',
        whatsapp: 19996129909,
        bio: `Entusiasta das melhores tecnologias e de mátematica avançada.<br><br> Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.`,
    }

    let classValue = {
        subject: 1,
        cost: 20,
    }

    let classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        },
    ]

    // await createProffy(db,proffyValue,classValue,classScheduleValues )

    const selectedProffys = await db.all(`SELECT * FROM proffys`)

    const selectedClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.* 
    FROM proffys
    JOIN classes ON (classes.proffy_id == proffys.id)
    WHERE classes.proffy_id = 2;
    `)
    // console.log(selectedProffys)
    // console.log(selectedClassesAndProffys)

    const selectedClassesSchedule = await db.all(`
    SELECT class_schedule.* 
    FROM class_schedule
    WHERE class_schedule.class_id = "2"
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= 520
    AND class_schedule.time_to > 520
    `)

    console.log(selectedClassesSchedule)
})