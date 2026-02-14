import Migration "migration";

// Apply migration logic using empty migration module in with clause.
(with migration = Migration.run)
actor {}
