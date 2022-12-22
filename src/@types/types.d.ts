
interface SportItem {
    id: string,
    alias: string,
    name: string,
    order?: number,
    short_name?: "2H",
    origin_id?: "20",
}

interface SportNode {
    name: string;
    children: SportNode
}

interface Scores {
    score: string,
    period: 10,
    type: string,
}

type MatchInfo = {
    score: string,
    scores: Scores,
    server: number,
    time: string,
}

 interface SportData {
    sport: SportItem,
    match_info: MatchInfo,
    region: SportItem,
    tournament: SportItem,
    _id: string,
    home: SportItem,
    away: SportItem,
    markets_count: number,
    status: SportData & {short_name: string, origin_id: string}
}

type IsOpen = {
    [key: string]: boolean
} 