import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
    const aasa = {
        "applinks": {
            "apps": [],
            "details": [
                {
                    "appID": "X9427C6Z8Z.com.Sitch.SitchApp",
                    "paths": ["/sitchList/*"],
                    "comment": "This is the path to the Sitch List page in the app."
                }
            ]
        }
    };

    return new Response(JSON.stringify(aasa), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}