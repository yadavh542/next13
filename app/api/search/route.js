import { NextResponse } from "next/server";

import pokemon from "../../pokemon.json";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name");
    const pokemonData = pokemon?.filter(p=>
        p.name.toLowerCase().includes(name?.toLowerCase() ?? "")
        );
    return NextResponse.json(pokemonData.slice(0, 10));
  }
  