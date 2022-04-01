# Nurse Scheduling Problem (NSP) using Quantum Annealing

# Problem Statement

Scheduling problems represent a number of practically important examples. For example, human resource (HR) tasks like managing workforce schedules are a major bottleneck, and the Nurse Scheduling Problem (NSP) arises when finding the optimal schedule for a set of available nurses over a fixed timetable of shifts. Solutions to NSP are required to respect hard constraints, such as days off and minimum availability, as well as soft constraints, such as minimum shift assignments, for each nurse.

We implement a web application software, using quantum based approach (D-Wave 2000Q quantum annealing device) to optimally assign workforce shedules illustration by easily and quickly creating nurse-shift scheduling in hospitals. This has not been widely implemented as it is computationally an NP-hard problem. After reducing NSP to a novel Ising-type Hamiltonian, we evaluate the solution quality obtained from the D-Wave 2000Q against the constraint requirements as well as the diversity of solutions.

# Quantum Annealing
Quantum annealing is an algorithm that looks at finding the approximate solutions to combinatorial optimizations problems. Quantum annealing can be used for optimization problems by finding the global minimum of an objective function.

# D-Wave Implementation
D-wave is based on quantum annealing to solve a combinatorial optimization problems.
Then the system evolves following the time-dependent Schrödinger equation, a natural quantum-mechanical evolution of physical systems.
<img src="https://render.githubusercontent.com/render/math?math=i\hbar\dfrac{\partial \psi(t)}{\partial t}=H(t)\psi(t)">
where <img src="https://render.githubusercontent.com/render/math?math=\psi(t)"> denotes the quantum mechanical wave function of the physical system and <img src="https://render.githubusercontent.com/render/math?math=H(t)"> is the time-dependent Hamiltonian that drives the dynamics. 

# Using QA to solve NSP
Quantum annealing is especially good at the Nurse Scheduling Problem (NSP), which involves finding an optimal way to assign nurses to shifts. NSPs impose a set of constraints which all solutions must abide by, such as frequency of shifts and alteration of nurses. This problem has made great strides during the quantum revolution due to the advantage granted by quantum parallelism.

The model is based on the Quadratic unconstrained binary optimization (QUBO) over variables that can take any discrete values from a given finite set. If <img src="https://render.githubusercontent.com/render/math?math=f(x):B^n \rightarrow R"> be a quadratic polynomial over binary variables, then the QUBO model is expressed as <img src="https://render.githubusercontent.com/render/math?math=f(x)=\sum_{i=1}^n\sum_{j=1}^iq_{ij}x_ix_j"> with <img src="https://render.githubusercontent.com/render/math?math=x_i\in B"> for <img src="https://render.githubusercontent.com/render/math?math=i\in [n]"> and coefficients <img src="https://render.githubusercontent.com/render/math?math=q_{ij}\in R$ for $1\leq j\leq i \leq n">. The matrix representation is also expressed of the form <img src="https://render.githubusercontent.com/render/math?math=QUBO: f(x)=x^TQx">
where <img src="https://render.githubusercontent.com/render/math?math=Q\in R^{n\times n}"> is the symmetric <img src="https://render.githubusercontent.com/render/math?math=n\times n"> matrix which contains the coefficients <img src="https://render.githubusercontent.com/render/math?math=q_{ij}">.


The QUBO can then be easily transformed into an Ising formulation which a quantum annealer like the one developed from D-Wave can accept as input.

# Problem Formulation
The nurse scheduling problem seeks to find an optimal schedule for a group of nurses to the day and night duty shifts. Two hard constraints is applied to enforce a minimum number of nurses assigned to each shift, that is the shift and nurse constraints applied. Shift constraints require that a sufficient number of nurses be assigned to each shift. The NSP has the following general constraints

1. Upper and lower limit of the number of breaks.
2. The number of nurses on duty for each shift slot.
3. Upper and lower limit of time interval between two days of duty.

This is based on this [article](https://www.nature.com/articles/s41598-019-49172-3).

# Source Code
A summary of the Nurse Scheduling model code:

- Assign the size of the problem (number of nurses and days) and parameters
- Compute the "penalty matrix" J
- Develop the QUBO matrix
- Run the problem (solve the QUBO)
- Calculate the hard nurse constraint sum, to check if satisfied
- Calculate the hard shift constraint sum, to check if satisfied
- Calculate the soft nurse constraint sum, to check if satisfied
- Print schedule
To run the demo, run the command ...

# Usage

To run the demo, run the command

python QC_V1.2.ipynb

# Components of implementation
The system consists of three components:

- web application which allows the user to load a schedule, modify it, set basic requirements, have it sent to solver service to be adjusted and display discrepancies between shifts as seen in schedule and the rules of the Polish Labour Code
- solver written in Qbraid using Dwave Quantum Annealing which adjusts schedules and provides information about points where the schedules do not adhere
- backend also written in python which allows for communication of both aforementioned components.

# Running the web app 
### Installation
#### `Step 1` - clone the repo
```bash
$ git clone <https://github.com/donthisankalpa/NYUAD-2022-NurseQ.git>
```
#### `Step 2` - cd in the repo
```bash
$ cd demo-progressive-web-app
```
#### `Step 3` - install dependencies
```bash
$ npm install
```
#### `Step 4` - run application
```bash
$ npm run start
```
In browser, open [http://localhost:3000](http://localhost:3000)

 

# Contributing

Pull requests are welcome. For major contributions, please open an issue first to discuss what you would like to change.

Please make sure to update texts as appropriate.

# Style 

To enforce a consistent code style in the project, we use eslint to verify that code contributions conform to and respect the project’s style guide.

# Credits and Acknowledgments
We would like to express our gratitude to the organizers of the NYUAD Quantum Computing Hackathon for providing us with an opportunity to work on this project. Especially we want to thank Sana Odeh the head organizer of the hackathon for providing us with all the resources. Similarly, we would like to thank our mentors Dr. Barry Sanders, Dr. Vikram Mulligan, Priya Aswani and Ini Ukut for assisting with our problems and motivating us throughout the hackathon. 

# References
1. Ikeda, K., Nakamura, Y., & Humble, T. S. (2019). Application of quantum annealing to nurse scheduling problem. Scientific reports, 9(1), 1-10.


```python

```
