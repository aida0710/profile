export class TableDate {
    private year: number | undefined;
    private month: number | undefined;
    private day: number | undefined;

    public setYear(year: number): TableDate {
        this.year = year;
        return this;
    }

    public setMonth(month: number): TableDate {
        this.month = month;
        return this;
    }

    public setDay(day: number): TableDate {
        this.day = day;
        return this;
    }

    public getDate(): string {
        if (this.year === undefined && this.month === undefined && this.day === undefined) {
            throw new Error('At least one of year, month, or day must be set.');
        }

        if (this.year === undefined && this.month === undefined) {
            throw new Error('Month must be set when year is not set.');
        }

        if (this.year !== undefined) {
            const year: number = this.year;
            const month: string = this.month !== undefined ? this.padZero(this.month) : '';
            const day: string = this.day !== undefined ? this.padZero(this.day) : '';
            return `${year}${month ? `/${month}` : ''}${day ? `/${day}` : ''}`;
        } else {
            const month: string = this.padZero(this.month as number);
            const day: string = this.day !== undefined ? this.padZero(this.day) : '';
            return `${month}${day ? `/${day}` : ''}`;
        }
    }

    private padZero(value: number): string {
        return value < 10 ? `0${value}` : `${value}`;
    }
}