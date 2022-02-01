import Link from "next/link";
import { useRouter } from 'next/router';


const Input = props => (
    <>
        <div>
            <label htmlFor="price" className="block text-md font-medium text-white">
                {props.Inputlabel}
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">

                <input
                    required
                    value={props.value} onChange={props.onChange}
                    type="text"
                    name="price"
                    id="price"
                    className="focus:ring-indigo-500 text-black focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-md  border-gray-300 rounded-md"
                    placeholder="0.00"
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                    <label htmlFor="currency" className="sr-only">
                        Currency
                    </label>
                    <select
                        id="currency"
                        name="currency"
                        className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                    >
                        <option>EUR</option>

                    </select>
                </div>
            </div>
        </div>
    </>
);

export default Input;
