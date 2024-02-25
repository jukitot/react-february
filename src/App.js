import {Users} from "./components/UserContainer/Users/Users";
import {Posts} from "./components/PostContainer/Posts/Posts";
import {Launches} from "./components/SpaceXContainer/Launches";

const App = () => {
    return (
        <div>
            <Users/>
            <hr/>
            <Posts/>
            <hr/>
            <Launches/>
        </div>
    );
};

export {App};