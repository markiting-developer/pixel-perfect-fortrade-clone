
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
      <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
      <Input 
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        className={`h-12 pl-12 pr-4 rounded-lg text-base text-white placeholder:text-gray-400 bg-transparent border border-white/30 focus:border-blue-400 ${className}`}
        required={required}
      />
    </div>
  );
};

export default FormInput;
