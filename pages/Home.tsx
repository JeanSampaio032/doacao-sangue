import { useState } from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import { BarChart, ChevronDown, PieChart } from 'lucide-react';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

// Types
interface BloodTypes {
  'A+': number;
  'A-': number;
  'B+': number;
  'B-': number;
  'AB+': number;
  'AB-': number;
  'O+': number;
  'O-': number;
}

interface StateData {
  name: string;
  code: string;
  stock: number;
  bloodTypes: BloodTypes;
}


type Props = {}

const Home = (props: Props) => {

    const [selectedState, setSelectedState] = useState<string>('SP');

  // Hardcoded state data - in a real application, this would come from a backend API
  const stateData: StateData[] = [
    { name: 'Acre', code: 'AC', stock: 65, bloodTypes: { 'A+': 32, 'A-': 7, 'B+': 10, 'B-': 2, 'AB+': 4, 'AB-': 1, 'O+': 30, 'O-': 14 } },
    { name: 'Alagoas', code: 'AL', stock: 45, bloodTypes: { 'A+': 31, 'A-': 6, 'B+': 9, 'B-': 2, 'AB+': 3, 'AB-': 1, 'O+': 33, 'O-': 15 } },
    { name: 'Amapá', code: 'AP', stock: 70, bloodTypes: { 'A+': 35, 'A-': 5, 'B+': 11, 'B-': 3, 'AB+': 2, 'AB-': 1, 'O+': 29, 'O-': 14 } },
    { name: 'Amazonas', code: 'AM', stock: 55, bloodTypes: { 'A+': 33, 'A-': 8, 'B+': 8, 'B-': 1, 'AB+': 4, 'AB-': 1, 'O+': 32, 'O-': 13 } },
    { name: 'Bahia', code: 'BA', stock: 30, bloodTypes: { 'A+': 29, 'A-': 5, 'B+': 12, 'B-': 3, 'AB+': 3, 'AB-': 1, 'O+': 36, 'O-': 11 } },
    { name: 'Ceará', code: 'CE', stock: 80, bloodTypes: { 'A+': 36, 'A-': 7, 'B+': 7, 'B-': 2, 'AB+': 5, 'AB-': 1, 'O+': 28, 'O-': 14 } },
    { name: 'Distrito Federal', code: 'DF', stock: 50, bloodTypes: { 'A+': 30, 'A-': 6, 'B+': 10, 'B-': 2, 'AB+': 4, 'AB-': 1, 'O+': 34, 'O-': 13 } },
    { name: 'Espírito Santo', code: 'ES', stock: 75, bloodTypes: { 'A+': 34, 'A-': 5, 'B+': 9, 'B-': 3, 'AB+': 3, 'AB-': 1, 'O+': 31, 'O-': 14 } },
    { name: 'Goiás', code: 'GO', stock: 40, bloodTypes: { 'A+': 32, 'A-': 7, 'B+': 8, 'B-': 1, 'AB+': 2, 'AB-': 1, 'O+': 37, 'O-': 12 } },
    { name: 'Maranhão', code: 'MA', stock: 60, bloodTypes: { 'A+': 28, 'A-': 6, 'B+': 11, 'B-': 2, 'AB+': 4, 'AB-': 1, 'O+': 35, 'O-': 13 } },
    { name: 'Mato Grosso', code: 'MT', stock: 35, bloodTypes: { 'A+': 31, 'A-': 5, 'B+': 10, 'B-': 3, 'AB+': 3, 'AB-': 1, 'O+': 34, 'O-': 13 } },
    { name: 'Mato Grosso do Sul', code: 'MS', stock: 85, bloodTypes: { 'A+': 33, 'A-': 7, 'B+': 9, 'B-': 2, 'AB+': 2, 'AB-': 1, 'O+': 32, 'O-': 14 } },
    { name: 'Minas Gerais', code: 'MG', stock: 25, bloodTypes: { 'A+': 28, 'A-': 7, 'B+': 8, 'B-': 2, 'AB+': 4, 'AB-': 1, 'O+': 38, 'O-': 12 } },
    { name: 'Pará', code: 'PA', stock: 90, bloodTypes: { 'A+': 35, 'A-': 6, 'B+': 7, 'B-': 1, 'AB+': 5, 'AB-': 1, 'O+': 30, 'O-': 15 } },
    { name: 'Paraíba', code: 'PB', stock: 50, bloodTypes: { 'A+': 30, 'A-': 5, 'B+': 12, 'B-': 3, 'AB+': 3, 'AB-': 1, 'O+': 33, 'O-': 13 } },
    { name: 'Paraná', code: 'PR', stock: 70, bloodTypes: { 'A+': 34, 'A-': 8, 'B+': 9, 'B-': 2, 'AB+': 2, 'AB-': 1, 'O+': 31, 'O-': 13 } },
    { name: 'Pernambuco', code: 'PE', stock: 45, bloodTypes: { 'A+': 31, 'A-': 6, 'B+': 11, 'B-': 2, 'AB+': 4, 'AB-': 1, 'O+': 32, 'O-': 13 } },
    { name: 'Piauí', code: 'PI', stock: 60, bloodTypes: { 'A+': 29, 'A-': 5, 'B+': 10, 'B-': 3, 'AB+': 3, 'AB-': 1, 'O+': 36, 'O-': 13 } },
    { name: 'Rio de Janeiro', code: 'RJ', stock: 30, bloodTypes: { 'A+': 30, 'A-': 5, 'B+': 10, 'B-': 3, 'AB+': 2, 'AB-': 1, 'O+': 35, 'O-': 14 } },
    { name: 'Rio Grande do Norte', code: 'RN', stock: 80, bloodTypes: { 'A+': 33, 'A-': 7, 'B+': 8, 'B-': 2, 'AB+': 4, 'AB-': 1, 'O+': 31, 'O-': 14 } },
    { name: 'Rio Grande do Sul', code: 'RS', stock: 55, bloodTypes: { 'A+': 36, 'A-': 6, 'B+': 7, 'B-': 1, 'AB+': 5, 'AB-': 1, 'O+': 30, 'O-': 14 } },
    { name: 'Rondônia', code: 'RO', stock: 75, bloodTypes: { 'A+': 32, 'A-': 5, 'B+': 11, 'B-': 3, 'AB+': 3, 'AB-': 1, 'O+': 32, 'O-': 13 } },
    { name: 'Roraima', code: 'RR', stock: 40, bloodTypes: { 'A+': 30, 'A-': 7, 'B+': 9, 'B-': 2, 'AB+': 2, 'AB-': 1, 'O+': 35, 'O-': 14 } },
    { name: 'Santa Catarina', code: 'SC', stock: 65, bloodTypes: { 'A+': 35, 'A-': 8, 'B+': 8, 'B-': 1, 'AB+': 4, 'AB-': 1, 'O+': 29, 'O-': 14 } },
    { name: 'São Paulo', code: 'SP', stock: 35, bloodTypes: { 'A+': 34, 'A-': 6, 'B+': 9, 'B-': 2, 'AB+': 3, 'AB-': 1, 'O+': 30, 'O-': 15 } },
    { name: 'Sergipe', code: 'SE', stock: 85, bloodTypes: { 'A+': 31, 'A-': 5, 'B+': 12, 'B-': 3, 'AB+': 2, 'AB-': 1, 'O+': 33, 'O-': 13 } },
    { name: 'Tocantins', code: 'TO', stock: 25, bloodTypes: { 'A+': 28, 'A-': 7, 'B+': 10, 'B-': 2, 'AB+': 4, 'AB-': 1, 'O+': 36, 'O-': 12 } },
  ];

  const bloodTypeLabels = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const bloodTypeColors = ['#FF6384', '#FF9F40', '#FFCD56', '#4BC0C0', '#36A2EB', '#9966FF', '#C9CBCF', '#E7E9ED'];

  // Generate bar chart data
  const barChartData = {
    labels: stateData.map(state => state.name),
    datasets: [{
      label: 'Nível de Estoque (%)',
      data: stateData.map(state => state.stock),
      backgroundColor: stateData.map(state => 
        state.stock < 30 ? 'rgba(233, 41, 51, 0.7)' : 
        state.stock < 70 ? 'rgba(255, 206, 86, 0.7)' : 
        'rgba(75, 192, 192, 0.7)'
      ),
      borderColor: stateData.map(state => 
        state.stock < 30 ? 'rgba(233, 41, 51, 1)' : 
        state.stock < 70 ? 'rgba(255, 206, 86, 1)' : 
        'rgba(75, 192, 192, 1)'
      ),
      borderWidth: 1
    }]
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: { 
          callback: function(value: any) { 
            return value + '%' 
          } 
        }
      }
    },
    plugins: { 
      legend: { display: false } 
    }
  };


    const getPieChartData = () => {
    let dataForChart: number[];
    let chartLabel = 'Distribuição Sanguínea';

    if (selectedState === 'geral') {
      // Calculate average for Brazil
      const nationalDistribution: { [key: string]: number } = {};
      bloodTypeLabels.forEach(type => nationalDistribution[type] = 0);
      
      stateData.forEach(state => {
        bloodTypeLabels.forEach(type => {
          nationalDistribution[type] += state.bloodTypes[type as keyof BloodTypes] || 0;
        });
      });
      
      dataForChart = bloodTypeLabels.map(type => Math.round(nationalDistribution[type] / stateData.length));
      chartLabel = 'Distribuição Sanguínea - Brasil (Média)';
    } else {
      const selectedStateData = stateData.find(s => s.code === selectedState);
      if (selectedStateData) {
        dataForChart = bloodTypeLabels.map(type => selectedStateData.bloodTypes[type as keyof BloodTypes] || 0);
        chartLabel = `Distribuição Sanguínea - ${selectedStateData.name}`;
      } else {
        // Fallback to SP if state not found
        const spData = stateData.find(s => s.code === "SP")!;
        dataForChart = bloodTypeLabels.map(type => spData.bloodTypes[type as keyof BloodTypes] || 0);
        chartLabel = `Distribuição Sanguínea - São Paulo`;
      }
    }

    return {
      labels: bloodTypeLabels,
      datasets: [{
        label: chartLabel,
        data: dataForChart,
        backgroundColor: bloodTypeColors,
        hoverOffset: 4
      }]
    };
  };

  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom' as const },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            let label = context.label || '';
            if (label) { label += ': '; }
            if (context.parsed !== null) { label += context.parsed + '%'; }
            return label;
          }
        }
      }
    }
  };
    return (
        <main className="px-4 sm:px-8 lg:px-16 xl:px-20 flex flex-1 justify-center py-8">
            <div className="layout-content-container flex flex-col w-full max-w-7xl">
                <div className="flex flex-wrap justify-between items-center gap-4 p-4 mb-6">
                    <h2 className="text-rose-900 text-3xl font-bold leading-tight tracking-tight">Níveis de Estoque de Sangue</h2>
                    <div className="flex items-center gap-2">
                        <span className="material-icons text-rose-700 text-sm">info</span>
                        <p className="text-rose-700 text-xs">Dados atualizados em tempo real</p>
                    </div>
                </div>

                {/* State Stock Chart */}
                <div className="grid grid-cols-1 gap-8 mb-8">
                    <section className="bg-white rounded-xl shadow-lg p-6">
                        <h3 className="text-rose-900 text-xl font-semibold leading-tight tracking-tight mb-4 flex items-center">
                            <BarChart />
                            Estoque por Estado
                        </h3>
                        <div className="relative h-80 lg:h-96">
                            <Bar data={barChartData} options={barChartOptions} />
                        </div>
                    </section>
                </div>

                {/* Blood Type Distribution Chart */}
                <div className="grid grid-cols-1 gap-8">
                    <section className="bg-white rounded-xl shadow-lg p-6">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                            <h3 className="text-rose-900 text-xl font-semibold leading-tight tracking-tight flex items-center whitespace-nowrap">
                                <PieChart />
                                Distribuição por Tipo Sanguíneo
                            </h3>
                            <div className="relative w-full sm:w-auto">
                                <label className="sr-only" htmlFor="stateSelect">Selecionar Estado</label>
                                <select
                                    className="appearance-none block w-full sm:w-64 bg-rose-50 border border-rose-300 text-rose-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-rose-500 text-sm"
                                    id="stateSelect"
                                    name="stateSelect"
                                    value={selectedState}
                                    onChange={(e) => setSelectedState(e.target.value)}
                                >
                                    <option value="geral">Geral (Brasil)</option>
                                    {stateData.map(state => (
                                        <option key={state.code} value={state.code}>{state.name}</option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-rose-700">
                                    <ChevronDown />
                                </div>
                            </div>
                        </div>
                        <div className="relative h-80 lg:h-96">
                            <Pie data={getPieChartData()} options={pieChartOptions} />
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default Home