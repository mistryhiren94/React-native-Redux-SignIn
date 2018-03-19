export const RequiredValidation = (value, allValues, props, name) => {
    console.log(value);
    return (
        value || value!='' ? undefined : (name=='firstName' ? 'First Name is required' : name + ' is required')
    )
}
