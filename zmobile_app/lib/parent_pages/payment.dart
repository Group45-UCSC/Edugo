// ignore_for_file: prefer_const_constructors, use_key_in_widget_constructors, prefer_const_literals_to_create_immutables

import 'package:flutter/material.dart';
import './navbar.dart';

class PaymentPage extends StatelessWidget {
   @override
  Widget build(BuildContext context) {
    return Navbar(
      child: DefaultTabController(
        length: 2,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Padding(
              padding: const EdgeInsets.all(20.0),
              child: Text(
                'Payments',
                style: TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            SizedBox(height: 20),
            TabBar(
              tabs: [
                Tab(text: 'Ongoing Payment'),
                Tab(text: 'Paid Payment'),
              ],
              labelColor: Colors.black,
              unselectedLabelColor: Colors.black,
              indicator: BoxDecoration(
                color: Colors.orange,
              ),
            ),
            Expanded(
              child: TabBarView(
                children: [
                  _buildOngoingPayTabContent(context),
                  _buildPaidPayTabContent(),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildOngoingPayTabContent(BuildContext context) {
  return SingleChildScrollView(
    child: DataTable(
      columns: const <DataColumn>[
        DataColumn(label: Text('Children')),
        DataColumn(label: Text('Month')),
        DataColumn(label: Text('Payment')),
      ],
      rows: List.generate(3, (index) {
        return DataRow(
          onSelectChanged: (selected) {
            if (selected == true) {
              if (index != -1) {
                _showConfirmationDialog(context);
              }
            }
          },
          cells: <DataCell>[
            // Indeex+1 because index starts at 0
            DataCell(Text('Child ${index + 1}')),
            DataCell(Text('September')),
            DataCell(Text('2500')),
          ],
        );
      }),
    ),
  );
}

Widget _buildPaidPayTabContent() {
  return Center(
    child: SingleChildScrollView(
      child: DataTable(
        columns: const <DataColumn>[
          DataColumn(label: Text('Children')),
          DataColumn(label: Text('Month')),
          DataColumn(label: Text('Payment')),
        ],
        rows: [
          _buildDataRow('Child 1', 'August', '2500'),
          _buildDataRow('Child 2', 'August', '3000'),
          _buildDataRow('Child 3', 'August', '2000'),
          _buildDataRow('Child 1', 'July', '2500'),
          _buildDataRow('Child 2', 'July', '3000'),
          _buildDataRow('Child 3', 'July', '2000'),
          _buildDataRow('Child 1', 'June', '2500'),
          _buildDataRow('Child 2', 'June', '3000'),
          _buildDataRow('Child 3', 'June', '2000'),
          _buildDataRow('Child 1', 'May', '2000'),
          _buildDataRow('Child 2', 'May', '3000'),
          _buildDataRow('Child 3', 'May', '2000'),
        ],
      ),
    ),
  );
}

DataRow _buildDataRow(String child, String month, String payment) {
  return DataRow(
    cells: <DataCell>[
      DataCell(Text(child)),
      DataCell(Text(month)),
      DataCell(Text(payment)),
    ],
  );
}

  void _showConfirmationDialog(BuildContext context) {
  showDialog(
    context: context,
    builder: (BuildContext context) {
      return AlertDialog(
        title: Text('Confirm Payment'),
        content: Text('Did you pay the payment?'),
        actions: [
          TextButton(
            onPressed: () {
              Navigator.pop(context); // Close the dialog
            },
            child: Text('No'),
          ),
          TextButton(
            onPressed: () {
              Navigator.pop(context); // Close the dialog
            },
            child: Text('Yes'),
          ),
        ],
      );
    },
  );
}

}
