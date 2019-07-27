import { calendarActions, calendarReducer } from ".";
import calendarActionTypes from "./actions.types";

const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;

const reminderToTest = {
    city: 1000,
    text: "Reunión 2:30 en casa de Antonia",
    date: "10-10-2019",
    hour: "02:30:00",
    color: "red"
};

describe("actions", () => {
    it("should create an action to add a reminder", () => {
        const expectedAction = {
            type: calendarActionTypes.ADD_REMINDER,
            reminder: reminderToTest
        };
        expect(calendarActions.addReminder(reminderToTest)).toEqual(expectedAction);
    });
});

describe("calendar reducer", () => {
    it("should add Reminder with date, city, hour, text and color", () => {
        expect(
            calendarReducer({
                reminders: []
            }, {
                type: calendarActionTypes.ADD_REMINDER,
                reminder: reminderToTest
            })
        ).toEqual({
            reminders: [{...reminderToTest, id: Math.random() * 10000 }]
        });
    });
});