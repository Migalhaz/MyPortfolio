import { useState } from "react";

function Projects()
{
    const projects =
    [
        { //ECLIPSE
            "name": "Eclipse - Shine of Dawn",
            "description": "In hold Steam Game.",
            "images": [],
            "external_link": ""
        },
        { //MACHICK
            "name": "Machick",
            "description": "Released Steam Game.",
            "images": [],
            "external_link": ""
        },
        { //Bees vs Zombees
            "name": "Bees vs Zombees",
            "description": "Released Steam Game.",
            "images": [],
            "external_link": ""
        },
        { //Nebullon
            "name": "Nebullon",
            "description": "In development game.",
            "images": [],
            "external_link": ""
        },
        { //MilkyWay Express
            "name": "MilkyWay Express",
            "description": "Project to GMTK2025",
            "images": [],
            "external_link": ""
        },
        { //Migalha System
            "name": "Migalha System",
            "description": "Personal system to Unity",
            "images": [],
            "external_link": ""
        }
    ]

    const [projectIndex, setProjectIndex] = useState(0);

    function AddIndexValue(buffer: number) : void
    {
        let currentIndex = projectIndex + buffer; 
        if (currentIndex >= projects.length)
        {
            currentIndex = 0;
        }
        if (currentIndex < 0)
        {
            currentIndex = projects.length - 1;
        }
        setProjectIndex(currentIndex);
    }

    return (
        <div>
            <h1>PROJECTS</h1>
            <div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis voluptatum nihil aut eligendi ducimus! Quam qui laudantium fugiat excepturi deleniti asperiores officiis magnam amet ipsum ullam, deserunt veritatis quia consequuntur.</p>
                    <h2>Link: </h2>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
            <div>

            </div>
        </div>
    );
}