import Link from "next/link";

// import "./NavButton.scss";

const NavButton = props => (


    <Link href={props.path}>


        {/* color={router.pathname === '/projects' ? "blue.700" : "#000000"} */}
        {/* <div className="Icon">{props.icon}</div> */}
        <a class="btn btn-ghost btn-sm rounded-btn">{props.label}</a>

    </Link>
);

export default NavButton;