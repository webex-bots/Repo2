var idd = $trigger.id
var url = "https://to-do.office.com/tasks/id/" + idd + "/details"
var b = [
    {
        "type": "TextBlock",
        "text": `List name: ${$trigger.task_list_details.displayName}`,
        "wrap": true,
        "weight": "Bolder",
        "color": "Light"
    },
    {
        "type": "TextBlock",
        "text": "**New task created 🌟**",
        "wrap": true,
        "weight": "Bolder",
        "size": "Medium"
    },
    {
        "type": "ColumnSet",
        "columns": [
            {
                "type": "Column",
                "width": "22",
                "items": [
                    {
                        "text": "Task name",
                        "type": "TextBlock",
                        "wrap": true,
                        "color": "Light"
                    }
                ]
            },
            {
                "type": "Column",
                "width": "78",
                "items": [
                    {
                        "text": `${$trigger.title}`,
                        "type": "TextBlock",
                        "wrap": true
                    }
                ]
            }
        ],
    }
]



if ($trigger.hasOwnProperty('recurrence')) {
    if ($trigger.hasOwnProperty('dueDateTime')) {
        if ($trigger.recurrence.pattern.type === "absoluteYearly")
            $trigger.recurrence.pattern.type = "Yearly"
        else if ($trigger.recurrence.pattern.type === "weekly")
            $trigger.recurrence.pattern.type = "Weekly"
        else if ($trigger.recurrence.pattern.type === "absoluteMonthly")
            $trigger.recurrence.pattern.type = "Monthly"
        else if ($trigger.recurrence.pattern.type === "daily")
            $trigger.recurrence.pattern.type = "Daily"
        else if ($trigger.recurrence.pattern.type === "weekdays")
            $trigger.recurrence.pattern.type = "Weekdays"
        b.push({
            "type": "ColumnSet",
            "spacing": "Small",
            "columns": [
                {
                    "type": "Column",
                    "width": "22",
                    "items": [
                        {
                            "text": "Recurrence",
                            "type": "TextBlock",
                            "wrap": true,
                            "color": "Light"
                        }
                    ]
                },
                {
                    "type": "Column",
                    "width": "78",
                    "items": [
                        {
                            "text": `${$trigger.recurrence.pattern.type}`,
                            "type": "TextBlock",
                            "wrap": true,
                        }
                    ]
                }
            ],
        })
    }

    else {
        b.push({
            "type": "ColumnSet",
            "spacing": "Small",
            "columns": [
                {
                    "type": "Column",
                    "width": "22",
                    "items": [
                        {
                            "text": "Recurrence",
                            "type": "TextBlock",
                            "wrap": true,
                            "color": "Light"
                        }
                    ]
                },
                {
                    "type": "Column",
                    "width": "78",
                    "items": [
                        {
                            "text": `${$trigger.recurrence.pattern.type}`,
                            "type": "TextBlock",
                            "wrap": true,
                        }
                    ]
                }
            ]
        })
    }
}

if ($trigger.body.content !== "") {
    var obj = {
        "type": "ColumnSet",
        "spacing": "Small",
        "columns": [
            {
                "type": "Column",
                "width": "22",
                "items": [
                    {
                        "text": "Notes",
                        "type": "TextBlock",
                        "wrap": true,
                        "color": "Light"
                    }
                ]
            },
            {
                "type": "Column",
                "width": "78",
                "items": [
                    {
                        "text": `${$trigger.body.content.trim()}`,
                        "type": "TextBlock",
                        "wrap": true
                    }
                ]
            }
        ]
    }
    b.push(obj)
}

let content = {
    "body": b,
    "type": "AdaptiveCard",
    "version": "1.2",
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json"
};
var card = [{
    "contentType": "application/vnd.microsoft.card.adaptive",
    "content": content
}]

$export(null, { card });