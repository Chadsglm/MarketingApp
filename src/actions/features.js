import uuid from 'uuid';

export const addFeature = (
    {
        name = '',
        description = '',
        price = 0,
    } = {}
) => ({
    type: 'ADD_FEATURE',
    expense: {
        id: uuid(),
        name,
        description,
        price,
    }
});


export const removeFeature = ({ id } = {}) => ({
    type: 'REMOVE_FEATURE',
    id
});

// EDIT_EXPENSE
export const editFeature = (id, updates) => ({
    type: 'EDIT_FEATURE',
    id,
    updates
});