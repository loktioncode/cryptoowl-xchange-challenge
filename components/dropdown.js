import Link from "next/link";
import { useRouter } from 'next/router';


const DropDown = props => (
    <>
        <div>
            <label htmlFor="price" className="block text-md font-medium text-white">
                {props.title}
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">

        
                    <label htmlFor="currency" className="sr-only">
                        To
                    </label>
                    <select
                     onChange={props.onChange}
                        id="currency"
                        name="currency"
                        className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-400 sm:text-sm rounded-md"
                    >
                        {props.toCurrencies?.map((c) => (
                            <option key={c}>{c}</option>
                        ))}
                    </select>
          
            </div>
        </div>
    </>
);

export default DropDown;
