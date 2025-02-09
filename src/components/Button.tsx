import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva("border h-12 rounded-full px-6 font-medium",
    {
        variants: {
            variant: {
                primary: 'bg-lime-400 text-neutral-950 border-lime-400',
                secondary: 'border-white text-white bg-transparent',
            },
            size: {
                sm: 'h-10',
            }
        }
    }
)

export default function Button(
    props: { 
        variant: "primary" | "secondary",
        size?: "sm"
    } & ButtonHTMLAttributes<HTMLButtonElement>) {
    const { variant, className, size, ...otherProps } = props
    return (
        <button 
            className={
                classes({ variant, className,size })
            } 
            {...otherProps}
        />
    )
}

// open view --> check word wrap

// this button takes props of type ButtonHTMLAttributes which are HTMLButtonElement attributes and a variant property that can be primary or secondary and this will be provided in the component calling

// cva makes it easy to decide which classes would be applied to the component depending on its props

// structure ⬇️

// const functionName = cva(
//     'default classNames',
//     {
//         configuration that tells us what other classes to apply when we
//         have specific props selected
//     }
// )
