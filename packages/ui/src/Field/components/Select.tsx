// type SelectProps = {
//     name: string;
//     options: string[];
//     defaultValue?: string;
// } & FieldWrapperProps;

// export const Select = ({ name, options, defaultValue, ...wrapperProps }: SelectProps) => {
//     return (
//         <FieldWrapper {...wrapperProps} layout="input">
//             <select
//                 name={name}
//                 defaultValue={defaultValue}
//                 disabled={wrapperProps.isDisabled}
//                 className="flex-1 outline-none bg-transparent"
//             >
//                 {options.map((option, idx) => (
//                     <option key={idx} value={option}>
//                         {option}
//                     </option>
//                 ))}
//             </select>
//         </FieldWrapper>
//     );
// };

// export const selectValue = (fd: FormData, name: string): string | undefined => {
//     const val = fd.get(name);
//     return typeof val === "string" ? val : undefined;
// };




// ---------- SelectMultiple ---------- //

// type SelectMultipleProps = {
//     name: string;
//     options: string[];
//     defaultValue?: string[];
// } & FieldWrapperProps;

// export const SelectMultiple = ({ name, options, defaultValue = [], ...wrapperProps }: SelectMultipleProps) => {
//     return (
//         <FieldWrapper {...wrapperProps} layout="input">
//             <select
//                 name={name}
//                 multiple
//                 defaultValue={defaultValue}
//                 disabled={wrapperProps.isDisabled}
//                 className="flex-1 outline-none bg-transparent"
//             >
//                 {options.map((option, idx) => (
//                     <option key={idx} value={option}>
//                         {option}
//                     </option>
//                 ))}
//             </select>
//         </FieldWrapper>
//     );
// };

// export const selectMultipleValue = (fd: FormData, name: string): string[] => {
//     const values = fd.getAll(name);
//     return values.filter(v => typeof v === "string") as string[];
// };