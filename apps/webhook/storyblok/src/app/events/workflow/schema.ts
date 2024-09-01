import {WorkflowWebhook} from "./interface";

export const WorkflowSchema = {
    type: 'object',
    properties: {
        action: {
            type: 'string',
            enum: [WorkflowWebhook.ACTION.STAGE_CHANGED]
        },
        text: {type: 'string'},
        space_id: {type: 'number'},
        story_id: {type: 'number'},
        workflow_name: {type: 'string'},
        workflow_stage_name: {type: 'string'},
    },
    required: ['action', 'text', 'space_id', 'story_id', 'workflow_name', 'workflow_stage_name'],
}
