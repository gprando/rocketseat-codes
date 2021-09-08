import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';

import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';

import api from '../../services/api';

import Header from '../../components/Header';

import formatValue from '../../utils/formatValue';
import formatDate from '../../utils/formatDate';

import { Container, CardContainer, Card, TableContainer } from './styles';

interface Transaction {
  id: string;
  title: string;
  value: number;
  formattedValue: string;
  formattedDate: string;
  type: 'income' | 'outcome';
  category: { title: string };
  created_at: Date;
}

interface Balance {
  income: string;
  outcome: string;
  total: string;
}

const Dashboard: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<Balance>({} as Balance);

  useEffect(() => {
    async function loadTransactions(): Promise<void> {
      const response = await api.get('transactions');

      const auxTransactions: Transaction[] = response.data.transactions;
      const auxBalance: Balance = response.data.balance;

      setBalance(auxBalance);
      setTransactions(auxTransactions);
    }

    loadTransactions();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <CardContainer>
          <Card>
            <header>
              <p>Entradas</p>
              <img src={income} alt="Income" />
            </header>
            <h1 data-testid="balance-income">
              {balance.income ? (
                formatValue(parseFloat(balance.income))
              ) : (
                <Loader type="Audio" color="#12a454" height={100} width={100} />
              )}
            </h1>
          </Card>
          <Card>
            <header>
              <p>Saídas</p>
              <img src={outcome} alt="Outcome" />
            </header>
            <h1 data-testid="balance-outcome">
              {balance.outcome ? (
                formatValue(parseFloat(balance.outcome))
              ) : (
                <Loader type="Bars" color="#e83f5b" height={100} width={100} />
              )}
            </h1>
          </Card>
          <Card total>
            <header>
              <p>Total</p>
              <img src={total} alt="Total" />
            </header>
            <h1 data-testid="balance-total">
              {balance.total ? (
                formatValue(parseFloat(balance.total))
              ) : (
                <Loader
                  type="RevolvingDot"
                  color="#FFF"
                  height={100}
                  width={100}
                />
              )}
            </h1>
          </Card>
        </CardContainer>

        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Preço</th>
                <th>Categoria</th>
                <th>Data</th>
              </tr>
            </thead>

            <tbody>
              {transactions &&
                transactions.map(transaction => (
                  <tr key={transaction.id}>
                    <td className="title">{transaction.title}</td>
                    <td
                      className={
                        transaction.type === 'outcome' ? 'outcome' : 'income'
                      }
                    >
                      {transaction.type === 'outcome' ? '- ' : ''}
                      {formatValue(transaction.value)}
                    </td>
                    <td>{transaction.category.title}</td>
                    <td>{formatDate(transaction.created_at)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Dashboard;
