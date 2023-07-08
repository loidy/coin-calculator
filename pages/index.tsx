import { Inter } from 'next/font/google'
import {Component} from "react";
import {AppProps} from "next/app";

const inter = Inter({ subsets: ['latin'] })

interface HomeState {
  money: number,
  pp: number,
  gp: number,
  sp: number,
  cp: number
}
type CoinType = keyof HomeState;

export default class Home extends Component<AppProps, HomeState> {
  private rate = 0.50;

  constructor(props: AppProps) {
    super(props);
    this.state = {
      money: 0,
      pp: 0,
      gp: 0,
      sp: 0,
      cp: 0
    }
  }

  handleChange(event: string, type: CoinType) {
    if (type == 'money') {
      const money = parseFloat(event);
      this.setState({
        ...this.calculateCoins(this.convertMoneyToCopper(money)),
        money: money
      })
    } else {
      this.setState(prevState => ({
        ...prevState,
        [type]: parseInt(event),
        money: this.calculateMoney({
          ...prevState,
          [type]: parseInt(event),
        })
      }));
    }
  }

  private convertMoneyToCopper(money: number): number {
    return Math.floor(money / this.rate);
  }

  private calculateCoins(copper: number): HomeState {
    return {
      pp: Math.floor(copper / 1000),
      gp: Math.floor((copper % 1000) / 100),
      sp: Math.floor((copper % 100) / 10),
      cp: Math.floor(copper % 10),
      money: copper * 0.50
    }
  }

  private calculateMoney(state: HomeState): number {
    return ((state.pp || 0) * 1000 + (state.gp || 0) * 100 + (state.sp || 0) * 10 + (state.cp || 0)) * this.rate;
  }

  render() {
    return (
        <main
            className={`flex min-h-screen flex-col sm:flex-row items-center justify-center text-2xl ${inter.className}`}
        >
          <div className="w-36 min-w-min m-2">
            <label htmlFor="money" className="block font-medium text-gray-900">
              €
            </label>
            <div className="mt-2">
              <input
                  type="number"
                  name="money"
                  id="money"
                  step=".01"
                  min={0}
                  value={this.state.money}
                  onChange={(event) => this.handleChange(event.target.value, 'money')}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-2xl"
              />
            </div>
          </div>
          <div className="w-36 min-w-min m-2">
            <label htmlFor="pp" className="block font-medium text-gray-900">
              PP
            </label>
            <div className="mt-2">
              <input
                  type="number"
                  name="pp"
                  id="pp"
                  min={0}
                  pattern="[0-9]+"
                  value={this.state.pp}
                  onChange={(event) => this.handleChange(event.target.value, 'pp')}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-2xl"
              />
            </div>
          </div>
          <div className="w-36 min-w-min m-2">
            <label htmlFor="gp" className="block font-medium text-gray-900">
              GP
            </label>
            <div className="mt-2">
              <input
                  type="number"
                  name="gp"
                  id="gp"
                  min={0}
                  pattern="[0-9]+"
                  value={this.state.gp}
                  onChange={(event) => this.handleChange(event.target.value, 'gp')}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-2xl"
              />
            </div>
          </div>
          <div className="w-36 min-w-min m-2">
            <label htmlFor="sp" className="block font-medium text-gray-900">
              SP
            </label>
            <div className="mt-2">
              <input
                  type="number"
                  name="sp"
                  id="sp"
                  min={0}
                  pattern="[0-9]+"
                  value={this.state.sp}
                  onChange={(event) => this.handleChange(event.target.value, 'sp')}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-2xl"
              />
            </div>
          </div>
          <div className="w-36 min-w-min m-2">
            <label htmlFor="cp" className="block font-medium text-gray-900">
              CP
            </label>
            <div className="mt-2">
              <input
                  type="number"
                  name="cp"
                  id="cp"
                  min={0}
                  pattern="[0-9]+"
                  value={this.state.cp}
                  onChange={(event) => this.handleChange(event.target.value, 'cp')}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-2xl"
              />
            </div>
          </div>
        </main>
    )
  }
}
