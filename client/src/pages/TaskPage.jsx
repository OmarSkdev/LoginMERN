import { useAuth } from "../context/AuthContext"

export function TaskPage() {

    const {user} = useAuth();
    console.log(user);
    
    return (
        <div>
            Task Page
        </div>
    )
}
