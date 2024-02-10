import * as React from "react"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function SelectNormal() {
    return (
        <Select>
            <SelectTrigger className="p-2 text-gray-600">
                <SelectValue placeholder="Select * " />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Americas</SelectLabel>
                    <SelectItem value="+1">United States (+1)</SelectItem>
                    <SelectItem value="+52">Mexico (+52)</SelectItem>
                    <SelectItem value="+1">Canada (+1)</SelectItem>
                </SelectGroup>
                <SelectGroup>
                    <SelectLabel>Europe</SelectLabel>
                    <SelectItem value="+44">United Kingdom (+44)</SelectItem>
                    <SelectItem value="+33">France (+33)</SelectItem>
                    <SelectItem value="+49">Germany (+49)</SelectItem>
                </SelectGroup>
                <SelectGroup>
                    <SelectLabel>Asia</SelectLabel>
                    <SelectItem value="+86">China (+86)</SelectItem>
                    <SelectItem value="+91">India (+91)</SelectItem>
                    <SelectItem value="+81">Japan (+81)</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

<Select>
    <SelectTrigger className="p-2">
        <SelectValue placeholder="Select * " />
    </SelectTrigger>
</Select>