import React from 'react'
import {useRouter} from 'next/router'

export default function Game() {
    const router = useRouter();
    const { game, platform } = router.query
    console.log(router);

    return (
        <div>
            <h1>Estamos en un juego: {game}</h1>
            <h2>Platform: {platform}</h2>
        </div>
    )
}
