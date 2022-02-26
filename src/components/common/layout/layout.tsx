import Navbar from "components/common/navbar/navbar"

const Layout: React.FunctionComponent = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
        </div>
    )
}

export default Layout
