import { createContext, useState } from "react";
import { Menubar } from "primereact/menubar";
import { Outlet, useNavigate } from "react-router-dom";

export const Authcontext = createContext(null);
export default function Layout(){
    const [auth, setAuth]= useState({
        token: localStorage.getItem('token') ||'',
    });
    const navigate = useNavigate();
    const items = [
        {
            label:'Home',
            icon: 'pi pi-home',
            command: ()=>{
                navigate('/');
            } 
        },
        {
            label:'Login',
            icon: 'pi pi-star',
            command: ()=>{
                navigate('/login');
            } 
        },
        {
            label:'Register',
            icon: 'pi pi-home',
            command: ()=>{
                navigate('/register');
            } 
        },
        {
            label:'Books',
            icon: 'pi pi-search',
            items:[
                {
                    label:'Books List',
                    icon: 'pi pi-bolt',
                    command: ()=>{
                        navigate('/books/list');
                    },
                },
                auth.token
               ? {
                    label:'Books List',
                    icon: 'pi pi-bolt',
                    command: ()=>{
                        navigate('/books/list');
                    },
                }
                :{
                    label:'Login',
                    icon: 'pi pi-star',
                    command: ()=>{
                        navigate('/login');
                    } 
                },
                {
                    label:'Blocks',
                    icon: 'pi pi-server',
                },
                {
                    label:'UI Kit',
                    icon: 'pi pi-pencil',
                },
                {
                    label:'Templates',
                    icon: 'pi pi-palette',
                    items:[
                        {
                            label:'Apollo',
                            icon: 'pi pi-palette',
                        },
                        {
                            label:'Ultima',
                            icon: 'pi pi-palette',
                        },
                    ],
                },
            ],
        },
        {
                label:'Contact',
                icon: 'pi pi-envelope',
        },
        
    ];
    return(
        <Authcontext.Provider value={{auth, setAuth}}>
            <main>
            <div className="card">
                <Menubar model={items}/>
                </div>
                <Outlet/>
                </main>
        </Authcontext.Provider>
        
    );
};