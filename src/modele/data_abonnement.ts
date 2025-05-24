import { APIsql } from "./connexion.js";

class UnAbonnement {
    private _abon_num: string;
    private _abon_date: string;
    private _abon_comment: string;
    private _adh_num: string;

    constructor(abon_num = "", abon_date = "", abon_comment = "", adh_num = "") {
        this._abon_num = abon_num;
        this._abon_date = abon_date;
        this._abon_comment = abon_comment;
        this._adh_num = adh_num;
    }

    get abon_num(): string { return this._abon_num; }
    set abon_num(v: string) { this._abon_num = v; }
    get abon_date(): string { return this._abon_date; }
    set abon_date(v: string) { this._abon_date = v; }
    get abon_comment(): string { return this._abon_comment; }
    set abon_comment(v: string) { this._abon_comment = v; }
    get adh_num(): string { return this._adh_num; }
    set adh_num(v: string) { this._adh_num = v; }

    toArray(): APIsql.TtabAsso {
        return {
            "abon_num": this._abon_num,
            "abon_date": this._abon_date,
            "abon_comment": this._abon_comment,
            "adh_num": this._adh_num,
        };
    }
}

type TAbonnements = { [key: string]: UnAbonnement };

class LesAbonnements {
    constructor() {}

    private async load(result: APIsql.TdataSet): Promise<TAbonnements> {
        let abonnements: TAbonnements = {};
        for (let i = 0; i < result.length; i++) {
            const item: APIsql.TtabAsso = result[i];
            const abonnement = new UnAbonnement(
                item["abon_num"],
                item["abon_date"],
                item["abon_comment"],
                item["adh_num"]
            );
            abonnements[abonnement.abon_num] = abonnement;
        }
        return abonnements;
    }

    private prepare(where: string): string {
        let sql = "SELECT abon_num, abon_date, abon_comment, adh_num FROM abonnement";
        if (where.trim() !== "") {
            sql += " WHERE " + where;
        }
        sql += " ORDER BY abon_num";
        return sql;
    }

    async all(): Promise<TAbonnements> {
        const result = await APIsql.sqlWeb.SQLloadData(this.prepare(""), []);
        return this.load(result);
    }

    async byNumAbonnement(abon_num: string): Promise<UnAbonnement> {
        let abonnement = new UnAbonnement();
        const result = await APIsql.sqlWeb.SQLloadData(this.prepare("abon_num = ?"), [abon_num]);
        const abonnements = await this.load(result);
        const lesCles = Object.keys(abonnements);
        if (lesCles.length > 0) {
            abonnement = abonnements[lesCles[0]];
        }
        return abonnement;
    }

    async insert(unAbonnement: UnAbonnement): Promise<boolean> {
        const sql = "INSERT INTO abonnement (abon_num, abon_date, abon_comment, adh_num) VALUES (?, ?, ?, ?)";
        return APIsql.sqlWeb.SQLexec(sql, [
            unAbonnement.abon_num,
            unAbonnement.abon_date,
            unAbonnement.abon_comment,
            unAbonnement.adh_num
        ]);
    }

    async update(unAbonnement: UnAbonnement): Promise<boolean> {
        const sql = "UPDATE abonnement SET abon_date = ?, abon_comment = ?, adh_num = ? WHERE abon_num = ?";
        return APIsql.sqlWeb.SQLexec(sql, [
            unAbonnement.abon_date,
            unAbonnement.abon_comment,
            unAbonnement.adh_num,
            unAbonnement.abon_num
        ]);
    }

    async delete(abon_num: string): Promise<boolean> {
        const sql = "DELETE FROM abonnement WHERE abon_num = ?";
        return APIsql.sqlWeb.SQLexec(sql, [abon_num]);
    }

    async getNextNumero(): Promise<string> {
        let sql = "SELECT MAX(abon_num) AS max_num FROM abonnement";
        const result = await APIsql.sqlWeb.SQLloadData(sql, []);
        
        if (result.length > 0 && result[0]["max_num"]) {
            const maxNum = parseInt(result[0]["max_num"]);
            return (isNaN(maxNum) ? 0 : maxNum + 1).toString();
        }
        return "1";
    }
}

export { UnAbonnement, LesAbonnements, TAbonnements };