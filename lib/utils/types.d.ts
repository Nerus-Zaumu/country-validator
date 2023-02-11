export type Country = {
    name: string;
    dial_code: string;
    code: string;
    continent: Continent;
};
export type Continent = 'AFRICA' | 'EUROPE' | 'ASIA' | 'SOUTH AMERICA' | 'NORTH AMERICA' | 'OCEANIA' | 'ANTARTICA';
