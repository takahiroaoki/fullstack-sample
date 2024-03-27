import yup from "./yup.custom";

export const globalSchema = yup.object().shape({
    sampleInput: yup.string().required().default('')
})

