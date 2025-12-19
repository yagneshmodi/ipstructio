# IPStructio

A modern and extensible IP Address Management (IPAM) and Network Automation platform designed to support multi-branch enterprise environments. The system documents network inventory, maps devices, documentation, topology, and integrates with advanced vendor-specific features such as Alcatel-Lucent UNP dynamic VLAN assignment.

### Project Goals
- Provide a simple yet powerful IPAM solution
- Maintain a single source of truth for IPs, subnets, VLANs, and devices
- Enable clean documentation and auditable network changes
- Support Alcatel-Lucent UNP VLAN automation
- Offer a modern dashboard and search experience

#### Subnet Management
- [ ] Create, edit, and delete IPv4 subnets
- [ ] Automatic calculation of:
  - [ ] Network address
  - [ ] Broadcast address
  - [ ] Usable host range
  - [ ] Subnet utilization tracking

#### IP Address Management
- [ ] Track IP address status as free, assigned, or reserved.
- [ ] Assign metadata to devices which includes hostname, description, device type and MAC address.
- [ ] Visual indicators for IP usage, conflicts, and reservations.

#### Device Inventory
- [ ] Centralized inventory for all network devices
- [ ] Store:
  - [ ] Device name
  - [ ] Device type
  - [ ] MAC address
  - [ ] Assigned IPs
  - [ ] Vendor / manufacturer
  - [ ] Physical location
- Designed for infrastructure such as:
  - [ ] Switches
  - [ ] Routers
  - [ ] Security cameras
  - [ ] NAS devices
  - [ ] Access points
  - [ ] IoT devices

#### VLAN & Layer-2 Tracking
- [ ] Create and manage VLANs
- [ ] Map VLANs to subnets
- [ ] Visual tagging and color coding

#### Search & Filters
- [ ] Global search across:
  - [ ] IP addresses
  - [ ] Hostnames
  - [ ] MAC addresses
  - [ ] Subnets
- [ ] Fast filtering for quick troubleshooting and lookup

#### Dashboard
- [ ] Total subnets
- [ ] IP usage statistics
- [ ] Device counts by type
- [ ] Recent changes
- [ ] Alerts for high-priority issues

#### Audit Logs
- [ ] Full change tracking for:
  - [ ] IP modifications
  - [ ] Device edits
  - [ ] Subnet updates
- [ ] Audit entries include:
  - [ ] User who made the change
  - [ ] Timestamp
  - [ ] Change details (before/after)

#### User Roles & Authentication
- [ ] Role-based access control:
  - [ ] Admin – Full access
  - [ ] Editor – Modify data
  - [ ] Read-only – View only
- [ ] Secure authentication system

#### Bulk Import & Export
- [ ] Import data using CSV:
  - [ ] Subnets
  - [ ] IP addresses
  - [ ] Devices
- [ ] Export current data for:
  - [ ] Backups
  - [ ] Reporting
  - [ ] External Documentation

#### Notes & Documentation
- [ ] Switch configuration guides
- [ ] Network design notes
- [ ] Operational documentation

#### [ ] UNP Configuration (Alcatel-Lucent)
- [ ] Generate UNP configuration snippets for network devices
- [ ] Support mapping:
  - [ ] Full MAC addresses
  - [ ] MAC OUIs
- [ ] Use cases:
  - [ ] Dynamic VLAN assignment
  - [ ] Device-based network segmentation
- [ ] Export UNP rules in a switch-ready format

----
### Architecture
- **Frontend**: NextJs
- **Backend**: NextJS & Supabase
- **Database**: PostgreSQL