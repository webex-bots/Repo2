//for wakanda
//riserinseandsleep
//asdewdw-changesmade
//whynotiswiz-borosh
//for me
var url = $a3.output.issue_url;
var issueId = $a3.output.issue_key;
var summary = $a3.output.issue_data.summary


var items = [
    {
      "type": "TextBlock",
      "id": "successMsg",
      "text" : `**[${issueId}](${url}) has been updated**`,
      "wrap": true,
      "size": "Medium"
    },
    {
      "type": "ColumnSet",
      "columns": [
          {
              "type": "Column",
              "items": [
                  {
                      "type": "TextBlock",
                      "text": "Summary:",
                      "isSubtle": true
                  }
              ],
              "width": "150px"
          },
          {
              "type": "Column",
              "id": "summary",
              "items": [
                  {
                      "type": "TextBlock",
                      "text": summary,
                      "wrap": true,
                  }
              ],
              "width": "auto"
          }
      ]
    }    
];

let changelogItems = $trigger.changelog.items
let priorityVal = ""
let isPriority = false
for(let i = 0; i < changelogItems.length; i++) {
    if(changelogItems[i]["fieldId"] && changelogItems[i]["fieldId"] === "priority") {
        priorityVal = changelogItems[i]["toString"] ? changelogItems[i]["toString"] : "" 
        isPriority = true
    }
}



if(isPriority){
    items.push({
        "type": "ColumnSet",
        "columns": [
           {
              "type": "Column",
              "items": [
                  {
                      "type": "TextBlock",
                      "text": "Priority:",
                      "isSubtle": true
                  }
              ],
              "width": "150px"
           },
           {
              "type": "Column",
              "id": "priority",
              "items": [
                  {
                      "type": "TextBlock",
                      "text": priorityVal
                  }
              ],
              "width": "stretch"
            }
        ]
    })
}


if($trigger.event_type == "Description Added" && !isPriority){
    items.push({
      "type": "ColumnSet",
      "columns": [
           {
              "type": "Column",
              "items": [
                  {
                      "type": "TextBlock",
                      "text": "Description:",
                      "isSubtle": true
                  }
              ],
              "width": "150px"
           },
           {
              "type": "Column",
              "id": "description",
              "items": [
                  {
                      "type": "TextBlock",
                      "text": $trigger.issue_data.description,
                       "wrap": true,
                       "maxLines": 8
                  }
              ],
              "width": "stretch"
           }
       ]
    })
}


if($trigger.event_type == "Assignee Updated" && !isPriority){ 
    items.push({
      "type": "ColumnSet",
      "columns": [
           {
              "type": "Column",
              "items": [
                  {
                      "type": "TextBlock",
                      "text": "Assignee:",
                      "isSubtle": true
                  }
              ],
              "width": "150px"
           },
           {
              "type": "Column",
              "id": "assignee",
              "items": [
                  {
                      "type": "TextBlock",
                      "text": $trigger.changelog.items[0].toString
                  }
              ],
              "width": "stretch"
           }
       ]
    })
}

if($trigger.event_type == "Attachment Added" && !isPriority){ 
    items.push({
      "type": "ColumnSet",
      "columns": [
           {
              "type": "Column",
              "items": [
                  {
                      "type": "TextBlock",
                      "text": "Attachment:",
                      "isSubtle": true
                  }
              ],
              "width": "150px"
           },
           {
              "type": "Column",
              "id": "attachment",
              "items": [
                  {
                      "type": "TextBlock",
                      "text": $trigger.issue_data.attachment[0].filename
                  }
              ],
              "width": "stretch"
           }
       ]
    })
}
if($trigger.event_type == "Fix Version Added" && !isPriority){ 
    items.push({
      "type": "ColumnSet",
      "columns": [
           {
              "type": "Column",
              "items": [
                  {
                      "type": "TextBlock",
                      "text": "Fix Version:",
                      "isSubtle": true
                  }
              ],
              "width": "150px"
           },
           {
              "type": "Column",
              "id": "fixversion",
              "items": [
                  {
                      "type": "TextBlock",
                      "text": $trigger.issue_data.fixVersions[0].name
                  }
              ],
              "width": "stretch"
           }
       ]
    })
}

if($trigger.event_type == "Assignee Added" && !isPriority){ 
    items.push({
      "type": "ColumnSet",
      "columns": [
           {
              "type": "Column",
              "items": [
                  {
                      "type": "TextBlock",
                      "text": "Assignee:",
                      "isSubtle": true
                  }
              ],
              "width": "150px"
           },
           {
              "type": "Column",
              "id": "newassignee",
              "items": [
                  {
                      "type": "TextBlock",
                      "text": $trigger.issue_data.assignee.displayName
                  }
              ],
              "width": "stretch"
           }
       ]
    })
}
if($trigger.event_type == "Description Updated" && !isPriority){ 
    items.push({
      "type": "ColumnSet",
      "columns": [
           {
              "type": "Column",
              "items": [
                  {
                      "type": "TextBlock",
                      "text": "Description:",
                      "isSubtle": true
                  }
              ],
              "width": "150px"
           },
           {
              "type": "Column",
              "id": "newdescription",
              "items": [
                  {
                      "type": "TextBlock",
                      "text": $trigger.changelog.items[0].toString,
                       "wrap": true,
                        "maxLines": 8
                  }
              ],
              "width": "stretch"
           }
       ]
    })
}

if($trigger.event_type == "Status Updated" && !isPriority){ 
    let changelogItems = $trigger.changelog.items
    let statusVal = ""
    for(let i = 0; i < changelogItems.length; i++) {
        if(changelogItems[i]["field"] && changelogItems[i]["field"] === "status") {
            statusVal = changelogItems[i]["toString"] ? changelogItems[i]["toString"] : ""   
        }
    }
    items.push({
      "type": "ColumnSet",
      "columns": [
           {
              "type": "Column",
              "items": [
                  {
                      "type": "TextBlock",
                      "text": "Status:",
                      "isSubtle": true
                  }
              ],
              "width": "150px"
           },
           {
              "type": "Column",
              "id": "status",
              "items": [
                  {
                      "type": "TextBlock",
                      "text": statusVal
                  }
              ],
              "width": "stretch"
           }
       ]
    })
}

var card =[
    {
        "contentType": "application/vnd.microsoft.card.adaptive",
        "content": {
            "type": "AdaptiveCard",
            "body": [
                {
                    "type": "Container",
                    "items": items
                }
            ],
            "actions": [
                {
                    "type": "Action.Submit",
                    "id": "update",
                    "title": "Update Issue",
                    "data": {
                        "command": "update",
                        "issueid": $a3.output.issue_id
                    }
                },
                {
                    "type": "Action.ShowCard",
                    "title": "Add Comment",
                    "card": {
                        "type": "AdaptiveCard",
                        "body": [
                            {
                                "type": "TextBlock",
                                "text": "**Add Comment**",
                                "wrap": true
                            },
                            {
                                "type": "Input.Text",
                                "placeholder": "Write comment here",
                                "maxLength": 700,
                                "isMultiline": true,
                                "id": "commentText"
                            },
                            {
                                "type": "ActionSet",
                                "actions": [
                                    {
                                        "type": "Action.Submit",
                                        "title": "Save",
                                        "data": {
                                            "command": "jircloudaupdatenew",
                                            "subcommand": "comment",
                                            "issueid": $a3.output.issue_id
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "data": {
                        "command": "jiracloudconnectproject"
                    },
                    "title": "Switch Project",
                    "type": "Action.Submit"
                }
            ],
            "version": "1.1"
        }
    }
]
$export(null,{ card : card});
