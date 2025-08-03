import * as Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string().pattern(new RegExp("^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$"))
        .messages({
            "string.pattern.base": "Your brand value didn't match pattern",
        }),
    price: Joi.number().min(0).max(1000000).messages({
        "number.min": "Price must be at least 0",
        "number.max": "Price must be at most 1000000",
    }),
    year: Joi.number().min(1990).max(2024).messages({
        "number.min": "Year must be at least 1990",
        "number.max": "Year must be at most 2024",
    })
});