/**
 * Created by Dzzirt on 15.03.2017.
 */

abstract class Shape {
    protected mFillColor: string = "#000000";
    protected mBorderColor: string = "#000000";

    set fillColor(fillColor: string) {
        this.mFillColor = fillColor;
    }

    get fillColor(): string {
        return this.mFillColor;
    }

    get borderColor(): string {
        return this.mBorderColor;
    }

    set borderColor(value: string) {
        this.mBorderColor = value;
    }
}
