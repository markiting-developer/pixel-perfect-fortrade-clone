
import { Input } from "@/components/ui/input";
import { LucideIcon } from "lucide-react";

interface FormInputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  icon: LucideIcon;
  required?: boolean;
  className?: string;
}

const FormInput = ({ type, placeholder, value, onChange, icon: Icon, required = false, className = "" }: FormInputProps) => {
  return (
    <div className="relative">
      <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-[#d0d0d0] z-10" />
      <Input 
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        className={`h-10 sm:h-12 pl-10 sm:pl-12 pr-3 sm:pr-4 rounded-lg text-sm sm:text-base text-white placeholder:text-[#d0d0d0] bg-[rgba(255,255,255,0.05)] border border-white focus:border-white focus:shadow-[0_0_0_1px_rgba(255,255,255,0.3)] focus:bg-[rgba(255,255,255,0.08)] transition-all duration-200 ${className}`}
        required={required}
      />
    </div>
  );
};

export default FormInput;
